import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      {/* Newsletter */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
          <p className="text-gray-300 mb-4">Get the latest deals and offers delivered to your inbox</p>
          <div className="flex max-w-md mx-auto">
            <Input placeholder="Enter your email" className="rounded-r-none bg-white text-gray-900" />
            <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Get to Know Us</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    About amazone
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press Releases
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    amazone Science
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Make Money with Us</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Sell products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sell apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Become an Affiliate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Advertise Your Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Host Hub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Payment Products</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    amazone Business Card
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shop with Points
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Reload Your Balance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Currency Converter
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Let Us Help You</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Your Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Your Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Rates & Policies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns & Replacements
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">amazone</h2>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white">
                Conditions of Use
              </a>
              <a href="#" className="hover:text-white">
                Privacy Notice
              </a>
              <a href="#" className="hover:text-white">
                Interest-Based Ads
              </a>
              <span>© 2024 amazone.com, Inc.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
