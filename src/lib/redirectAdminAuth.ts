import "server-only";

import { existsSync, readFileSync } from "fs";
import { createHmac, timingSafeEqual } from "crypto";
import { join } from "path";
import { cookies } from "next/headers";

const ADMIN_COOKIE_NAME = "spytlabs_r_admin";
const ADMIN_ENV_KEYS = [
  "REDIRECT_ADMIN_USERNAME",
  "REDIRECT_ADMIN_PASSWORD",
  "REDIRECT_ADMIN_SESSION_SECRET",
] as const;

function parseEnvFile(contents: string) {
  const entries = new Map<string, string>();

  for (const rawLine of contents.split(/\r?\n/)) {
    const line = rawLine.trim();

    if (!line || line.startsWith("#")) {
      continue;
    }

    const equalsIndex = line.indexOf("=");

    if (equalsIndex === -1) {
      continue;
    }

    const key = line.slice(0, equalsIndex).trim();
    let value = line.slice(equalsIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    entries.set(key, value);
  }

  return entries;
}

function getLocalEnvOverride(name: string) {
  if (process.env.NODE_ENV === "production") {
    return undefined;
  }

  const envFiles = [".env.local", ".env.development.local", ".env.development", ".env"];

  for (const fileName of envFiles) {
    const filePath = join(process.cwd(), fileName);

    if (!existsSync(filePath)) {
      continue;
    }

    const parsed = parseEnvFile(readFileSync(filePath, "utf8"));
    const value = parsed.get(name);

    if (value) {
      return value;
    }
  }

  return undefined;
}

function getEnvValue(name: (typeof ADMIN_ENV_KEYS)[number]) {
  return getLocalEnvOverride(name) ?? process.env[name];
}

function getAdminCredentials() {
  const username = getEnvValue("REDIRECT_ADMIN_USERNAME");
  const password = getEnvValue("REDIRECT_ADMIN_PASSWORD");
  const sessionSecret = getEnvValue("REDIRECT_ADMIN_SESSION_SECRET");

  if (!username) {
    throw new Error("Missing environment variable: REDIRECT_ADMIN_USERNAME");
  }

  if (!password) {
    throw new Error("Missing environment variable: REDIRECT_ADMIN_PASSWORD");
  }

  if (!sessionSecret) {
    throw new Error("Missing environment variable: REDIRECT_ADMIN_SESSION_SECRET");
  }

  return { username, password, sessionSecret };
}

function signAdminSession(username: string, password: string, sessionSecret: string) {
  return createHmac("sha256", sessionSecret)
    .update(`${username}:${password}`)
    .digest("hex");
}

export function isValidAdminCredentials(username: string, password: string) {
  const credentials = getAdminCredentials();
  return username === credentials.username && password === credentials.password;
}

export async function isAdminAuthenticated() {
  const credentials = getAdminCredentials();
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(ADMIN_COOKIE_NAME)?.value;

  if (!cookieValue) {
    return false;
  }

  const expectedValue = signAdminSession(
    credentials.username,
    credentials.password,
    credentials.sessionSecret,
  );

  if (cookieValue.length !== expectedValue.length) {
    return false;
  }

  return timingSafeEqual(Buffer.from(cookieValue), Buffer.from(expectedValue));
}

export async function setAdminSessionCookie() {
  const credentials = getAdminCredentials();
  const cookieStore = await cookies();
  cookieStore.set(
    ADMIN_COOKIE_NAME,
    signAdminSession(
      credentials.username,
      credentials.password,
      credentials.sessionSecret,
    ),
    {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
    },
  );
}

export async function clearAdminSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
}
