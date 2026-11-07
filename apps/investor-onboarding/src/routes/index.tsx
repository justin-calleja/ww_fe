import { createFileRoute } from "@tanstack/react-router";

import { CreateAccount } from "@/components/create-account";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return <CreateAccount />;
}
