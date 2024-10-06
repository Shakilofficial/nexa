"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulating an async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Login attempt with:", loginForm);
    setIsLoading(false);
  };

  const handleGithubSignIn = () => {
    // Github sign in logic here
  };

  const handleGoogleSignIn = () => {
    // Google sign in logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-foreground">
        Log In to Your Account
      </h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleInputChange}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleInputChange}
            required
            className="mt-1"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-muted-foreground"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <Link
              href="/forgot-password"
              className="font-medium text-primary hover:text-primary/80"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
        <Button
          variant="custom"
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            "Log In"
          )}
        </Button>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted-foreground"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button variant="custom" onClick={handleGithubSignIn}>
            <Github className="h-5 w-5 mr-2" />
            Github
          </Button>
          <Button variant="custom" onClick={handleGoogleSignIn}>
            <FcGoogle className="h-5 w-5 mr-2" />
            Google
          </Button>
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-primary hover:text-primary/80"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
