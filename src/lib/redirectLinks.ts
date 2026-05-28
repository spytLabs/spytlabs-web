import "server-only";

import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export type RedirectLink = {
  id: number;
  code: string;
  target_url: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

function normalizeCode(input: string) {
  return input.trim().toLowerCase();
}

function isValidCode(code: string) {
  return /^[a-z0-9][a-z0-9_-]{1,63}$/.test(code);
}

function isValidTargetUrl(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export async function getRedirectTarget(code: string) {
  const supabaseAdmin = getSupabaseAdmin();
  const normalizedCode = normalizeCode(code);

  const { data, error } = await supabaseAdmin
    .from("redirect_links")
    .select("target_url")
    .eq("code", normalizedCode)
    .eq("is_active", true)
    .maybeSingle<{ target_url: string }>();

  if (error) {
    throw new Error(`Failed to resolve redirect code: ${error.message}`);
  }

  return data?.target_url ?? null;
}

export async function listRedirectLinks() {
  const supabaseAdmin = getSupabaseAdmin();
  const { data, error } = await supabaseAdmin
    .from("redirect_links")
    .select("id,code,target_url,is_active,created_at,updated_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(`Failed to list redirects: ${error.message}`);
  }

  return (data ?? []) as RedirectLink[];
}

export async function createRedirectLink(input: {
  code: string;
  targetUrl: string;
  isActive: boolean;
}) {
  const supabaseAdmin = getSupabaseAdmin();
  const code = normalizeCode(input.code);
  const targetUrl = input.targetUrl.trim();

  if (!isValidCode(code)) {
    throw new Error("Code must be 2-64 chars: lowercase letters, numbers, _ or -.");
  }

  if (!isValidTargetUrl(targetUrl)) {
    throw new Error("Target URL must start with http:// or https://.");
  }

  const { error } = await supabaseAdmin.from("redirect_links").insert({
    code,
    target_url: targetUrl,
    is_active: input.isActive,
  });

  if (error) {
    throw new Error(`Failed to create redirect: ${error.message}`);
  }
}

export async function updateRedirectLink(input: {
  id: number;
  code: string;
  targetUrl: string;
  isActive: boolean;
}) {
  const supabaseAdmin = getSupabaseAdmin();
  const code = normalizeCode(input.code);
  const targetUrl = input.targetUrl.trim();

  if (!isValidCode(code)) {
    throw new Error("Code must be 2-64 chars: lowercase letters, numbers, _ or -.");
  }

  if (!isValidTargetUrl(targetUrl)) {
    throw new Error("Target URL must start with http:// or https://.");
  }

  const { error } = await supabaseAdmin
    .from("redirect_links")
    .update({
      code,
      target_url: targetUrl,
      is_active: input.isActive,
    })
    .eq("id", input.id);

  if (error) {
    throw new Error(`Failed to update redirect: ${error.message}`);
  }
}

export async function deleteRedirectLink(id: number) {
  const supabaseAdmin = getSupabaseAdmin();
  const { error } = await supabaseAdmin
    .from("redirect_links")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(`Failed to delete redirect: ${error.message}`);
  }
}
