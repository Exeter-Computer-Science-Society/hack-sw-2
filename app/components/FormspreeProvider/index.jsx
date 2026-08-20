"use client"

import { FormspreeProvider as Provider } from "@formspree/react"

import { FORMSPREE_PROJECT_ID } from "../../config"

export function FormspreeProvider({ children }) {
	if (!FORMSPREE_PROJECT_ID) {
		return children
	}

	return <Provider project={FORMSPREE_PROJECT_ID}>{children}</Provider>
}
