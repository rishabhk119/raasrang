export const PERSISTENT_SESSION_COOKIE = 'raasrang_persistent_session';

// 10 years in seconds = 10 * 365.25 * 24 * 60 * 60 = 315,576,000s
export const PERPETUAL_COOKIE_MAX_AGE = 315360000;

// Persistent session cookies issued before this instant are rejected.
// Bump this (ISO timestamp) to force every device to log in again.
export const PERSISTENT_SESSIONS_VALID_AFTER = Date.parse('2026-11-03T12:17:03Z');
