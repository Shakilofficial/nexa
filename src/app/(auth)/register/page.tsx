"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

interface RegisterForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulating an async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Register attempt with:", registerForm);
    setIsLoading(false);
  };

  const handleGithubSignIn = () => {
    // Github sign in logic here
  };

  const handleGoogleSignIn = () => {
    // Google sign in logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-foreground">
        Join Our Community
      </h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <Label htmlFor="username">Choose a Username</Label>
          <Input
            id="username"
            type="text"
            name="username"
            value={registerForm.username}
            onChange={handleInputChange}
            required
            className="mt-1"
            placeholder="JohnDoe123"
          />
        </div>
        <div>
          <Label htmlFor="email">Your Email Address</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={registerForm.email}
            onChange={handleInputChange}
            required
            className="mt-1"
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <Label htmlFor="password">Create a Strong Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={registerForm.password}
            onChange={handleInputChange}
            required
            className="mt-1"
            placeholder="••••••••"
          />
        </div>
        <div>
          <Label htmlFor="confirmPassword">Confirm Your Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={registerForm.confirmPassword}
            onChange={handleInputChange}
            required
            className="mt-1"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            required
          />
          <label
            htmlFor="terms"
            className="ml-2 block text-sm text-muted-foreground"
          >
            I agree to the{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>
        <Button variant="custom" type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating your account...
            </>
          ) : (
            "Create Your Account"
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
              Or sign up with
            </span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button
            variant='custom'
            onClick={handleGithubSignIn}
        
          >
            <Github className="h-5 w-5 mr-2" />
            Github
          </Button>
          <Button
            variant="custom"
            onClick={handleGoogleSignIn}
        
          >
            <FcGoogle className="h-5 w-5 mr-2" />
            Google
          </Button>
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already part of our community?{" "}
        <Link
          href="/login"
          className="font-semibold text-primary hover:text-primary/80"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
