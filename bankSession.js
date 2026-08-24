const SESSION_KEY = "netbank_session";
const REG_KEY = "netbank_registration";

export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function getRegistration() {
  try {
    const raw = localStorage.getItem(REG_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setRegistration(reg) {
  localStorage.setItem(REG_KEY, JSON.stringify(reg));
}
