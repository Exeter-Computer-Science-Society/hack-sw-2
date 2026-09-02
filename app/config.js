/**
 * Site-wide constants that change between event cycles.
 */

// The Luma event page every "Register" call to action points at. Set it here once and
// the nav button, the hero, both event cards and the footer all follow.
//
// While it is empty the buttons render as a muted "Registration opens soon" rather than
// linking nowhere, so an unset URL can never ship as a dead or wrong link.
export const LUMA_URL = "https://luma.com/dqcb67mn"

// Where people are pointed for sponsorship and data questions.
export const CONTACT_EMAIL = "excs@groups.exeterguild.com"

// Formspree CLI project. The form key must match formspree.json.
// Project ID comes from the Formspree dashboard (Settings on a CLI project).
export const FORMSPREE_FORM_KEY = "sponsorForm"
export const FORMSPREE_PROJECT_ID = process.env.NEXT_PUBLIC_FORMSPREE_PROJECT_ID ?? ""
