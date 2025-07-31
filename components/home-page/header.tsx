"use client"

import { Search, ShoppingCart, MapPin, Menu, MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MobileMenu } from "./mobile-menu"
import { useState } from "react"
import Link from "next/link"
import { AccountButton } from "../custom-component/account-button"
import { useCurrentUser } from "@/src/hooks/useCurrentUser"


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All Departments")
  const { data: user, isLoading, isError } = useCurrentUser();

  console.log(user)

  const categories = [
    "All Departments",
    "Arts & Crafts",
    "Automotive",
    "Baby",
    "Beauty & Personal Care",
    "Books",
    "Boys' Fashion",
    "Computers",
    "Deals",
    "Digital Music",
    "Electronics",
    "Girls' Fashion",
    "Health & Household",
    "Home & Kitchen",
    "Industrial & Scientific",
    "Kindle Store",
    "Luggage",
    "Men's Fashion",
    "Movies & TV",
    "Music, CDs & Vinyl",
    "Pet Supplies",
    "Prime Video",
    "Software",
    "Sports & Outdoors",
    "Tools & Home Improvement",
    "Toys & Games",
    "Video Games",
    "Women's Fashion",
  ];


  return (
    <header className="bg-gray-900 text-white">
      {/* Top bar */}
      <div className="bg-gray-800 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Deliver to All Over Bangladesh</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {
              user && user.role === "SELLER" ? "" : <Link href="/auth/shop/loginShop">
                <span className="hover:underline">Hello, Sign in shop</span>
              </Link>
            }

            <span>Returns & Orders</span>
            {
              user && user.role === "SELLER" &&
              <Link href="/dashboard">
                <Button color="text-green">Shop Dashboard</Button>
              </Link>
            }
            {
              user && user.role === "SELLER" ? "" : <Link href="/auth/shop/registerShop">
                <Button >Become a seller</Button>
              </Link>
            }
            <div className="flex items-center space-x-1">
              <ShoppingCart className="h-4 w-4" />
              <span>Cart</span>
              <span className="bg-orange-500 text-xs px-1 rounded">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between space-x-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold"></h1>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-2xl hidden lg:flex">
            <div className="flex w-full">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-r-none bg-gray-200 text-gray-900 border-gray-300">
                    {selectedCategory}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="h-64 overflow-y-auto">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category} onSelect={() => setSelectedCategory(category)}>{category}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Input placeholder={`Search products in ${selectedCategory}...`} className="rounded-none border-gray-300 flex-1" />
              <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Account & Cart */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="ghost" className="flex flex-col items-start text-xs">
                <Link href={"/"}>
                  <span>Home</span>
                </Link>
              </Button>
              <AccountButton />
            </div>
            <Button variant="ghost" className="flex items-center space-x-1">
              <ShoppingCart className="h-6 w-6" />
              <Link href={"/cart"}>
                <div className="hidden md:block">
                  <span className="font-bold">Cart</span>
                  <span className="bg-orange-500 text-xs px-1 rounded ml-1">0</span>
                </div>
              </Link>
            </Button>
            <Button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <MenuIcon />
            </Button>
          </div>
        </div>
      </div>

      {/* Search bar for mobile */}
      <div className="px-4 pb-3 lg:hidden">
        <div className="flex w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-r-none bg-gray-200 text-gray-900 border-gray-300">
                {selectedCategory}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="h-64 overflow-y-auto">
              {categories.map((category) => (
                <DropdownMenuItem key={category} onSelect={() => setSelectedCategory(category)}>{category}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Input placeholder={`Search products in ${selectedCategory}...`} className="rounded-none border-gray-300 flex-1" />
          <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-800 px-4 py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 text-sm">
          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
            <Menu className="h-4 w-4" />
            <span>All</span>
          </Button>
          <span className="hover:underline cursor-pointer">Todays Deals</span>
          <span className="hover:underline cursor-pointer">Customer Service</span>
          <span className="hover:underline cursor-pointer">Registry</span>
          <span className="hover:underline cursor-pointer">Gift Cards</span>
          <span className="hover:underline cursor-pointer">Sell</span>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}
