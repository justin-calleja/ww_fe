import { Eye, EyeOff } from "lucide-react";
import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const deadLinkClassName =
	"inline p-0 font-normal text-foreground underline-offset-4 hover:underline";

type CreateAccountForm = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	acceptedTerms: boolean;
};

function isFormComplete(form: CreateAccountForm): boolean {
	return (
		form.firstName.trim().length > 0 &&
		form.lastName.trim().length > 0 &&
		form.email.trim().length > 0 &&
		form.password.length > 0 &&
		form.acceptedTerms
	);
}

export type CreateAccountProps = {
	onContinue?: (data: Omit<CreateAccountForm, "acceptedTerms">) => void;
	className?: string;
};

export function CreateAccount({ onContinue, className }: CreateAccountProps) {
	const termsId = useId();
	const [showPassword, setShowPassword] = useState(false);
	const [form, setForm] = useState<CreateAccountForm>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		acceptedTerms: false,
	});

	const canContinue = isFormComplete(form);

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!canContinue) return;
		onContinue?.({
			firstName: form.firstName.trim(),
			lastName: form.lastName.trim(),
			email: form.email.trim(),
			password: form.password,
		});
	}

	return (
		<div
			className={cn(
				"mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-10",
				className,
			)}
		>
			<header className="mb-10 text-center">
				<p className="text-lg font-semibold tracking-tight">WillowWealth</p>
			</header>

			<main className="flex flex-1 flex-col">
				<div className="mb-8 text-center">
					<h1 className="text-2xl font-semibold tracking-tight">
						Create your account
					</h1>
					<p className="mt-2 text-sm text-muted-foreground">
						Start building a portfolio tailored to your objectives.
					</p>
				</div>

				<form
					className="flex flex-col gap-4"
					onSubmit={handleSubmit}
					noValidate
				>
					<Input
						type="text"
						name="firstName"
						autoComplete="given-name"
						placeholder="First name"
						required
						value={form.firstName}
						onChange={(e) =>
							setForm((prev) => ({ ...prev, firstName: e.target.value }))
						}
					/>
					<Input
						type="text"
						name="lastName"
						autoComplete="family-name"
						placeholder="Last name"
						required
						value={form.lastName}
						onChange={(e) =>
							setForm((prev) => ({ ...prev, lastName: e.target.value }))
						}
					/>
					<Input
						type="email"
						name="email"
						autoComplete="email"
						placeholder="Email address"
						required
						value={form.email}
						onChange={(e) =>
							setForm((prev) => ({ ...prev, email: e.target.value }))
						}
					/>
					<div className="relative">
						<Input
							type={showPassword ? "text" : "password"}
							name="password"
							autoComplete="new-password"
							placeholder="Password"
							required
							className="pr-10"
							value={form.password}
							onChange={(e) =>
								setForm((prev) => ({ ...prev, password: e.target.value }))
							}
						/>
						<Button
							type="button"
							variant="ghost"
							size="icon-sm"
							className="absolute top-1/2 right-1 -translate-y-1/2 text-muted-foreground"
							onClick={() => setShowPassword((v) => !v)}
							aria-label={showPassword ? "Hide password" : "Show password"}
						>
							{showPassword ? <EyeOff /> : <Eye />}
						</Button>
					</div>

					<div className="flex items-start gap-3 pt-2">
						<Checkbox
							id={termsId}
							name="acceptedTerms"
							checked={form.acceptedTerms}
							onCheckedChange={(checked) =>
								setForm((prev) => ({
									...prev,
									acceptedTerms: checked,
								}))
							}
							className="mt-0.5"
						/>
						<Label
							htmlFor={termsId}
							className="block min-w-0 flex-1 font-normal leading-snug text-muted-foreground"
						>
							I have read and accepted the{" "}
							<button type="button" className={deadLinkClassName}>
								Privacy Policy
							</button>
							,{" "}
							<button type="button" className={deadLinkClassName}>
								Electronic Disclosure and Consent
							</button>{" "}
							and{" "}
							<button type="button" className={deadLinkClassName}>
								Terms of Service
							</button>{" "}
							and I consent to the use of electronic records in connection with
							this application.
						</Label>
					</div>

					<Button
						type="submit"
						size="lg"
						className="mt-4 w-full"
						disabled={!canContinue}
					>
						Continue
					</Button>
				</form>

				<p className="mt-8 text-center text-sm text-muted-foreground">
					Already have an account?{" "}
					<Button type="button" variant="link" className="h-auto p-0 text-sm">
						Log in
					</Button>
				</p>
			</main>
		</div>
	);
}
