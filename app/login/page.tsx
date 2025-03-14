"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Redirect would happen here after successful login
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-charcoal-600 hover:text-saffron-500 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>

        <div className="flex items-center gap-2 mb-8">
          <div className="bg-saffron-500 p-2 rounded-full">
            <Utensils className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold font-playfair text-burgundy-500">MenuMagic</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair text-burgundy-500 mb-2">Welcome back</h1>
          <p className="text-charcoal-600">Sign in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 flex-1">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              className="rounded-xl border-cream-300 focus:border-saffron-500 focus:ring-saffron-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="text-sm text-saffron-500 hover:text-saffron-600 transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="rounded-xl border-cream-300 focus:border-saffron-500 focus:ring-saffron-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
              Remember me for 30 days
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-saffron-500 hover:bg-saffron-600 text-white rounded-xl h-12"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cream-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-charcoal-500">or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="rounded-xl border-cream-300 hover:bg-cream-100 h-12">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="rounded-xl border-cream-300 hover:bg-cream-100 h-12">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Facebook
            </Button>
          </div>

          <p className="text-center text-sm text-charcoal-600 mt-8">
            Don't have an account?{" "}
            <Link href="/signup" className="text-saffron-500 hover:text-saffron-600 font-medium transition-colors">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      {/* Right side - Image */}
      <div className="hidden md:block w-1/2 bg-cream-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-saffron-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>

        <div className="absolute inset-0 flex items-center justify-center p-10">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-card animate-float">
            <Image
              src="/placeholder.svg?height=600&width=600&text=Restaurant+Menu+Preview"
              alt="Menu Preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-500/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold font-playfair mb-2">Create beautiful menus</h3>
              <p className="text-white/90">
                Join hundreds of restaurant owners who have transformed their dining experience
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 h-16 w-16 bg-saffron-300 rounded-full opacity-40 animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/4 h-12 w-12 bg-teal-300 rounded-full opacity-40 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 h-10 w-10 bg-burgundy-300 rounded-full opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  )
}

