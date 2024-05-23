/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/bH1P9Jj3r1L
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"

export function Calendar() {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-medium">May 2024</div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        <div className="text-gray-500 dark:text-gray-400 font-medium text-sm">Sun</div>
        <div className="text-gray-500 dark:text-gray-400 font-medium text-sm">Mon</div>
        <div className="text-gray-500 dark:text-gray-400 font-medium text-sm">Tue</div>
        <div className="text-gray-500 dark:text-gray-400 font-medium text-sm">Wed</div>
        <div className="text-gray-500 dark:text-gray-400 font-medium text-sm">Thu</div>
        <div className="text-gray-500 dark:text-gray-400 font-medium text-sm">Fri</div>
        <div className="text-gray-500 dark:text-gray-400 font-medium text-sm">Sat</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">1</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">2</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">3</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">4</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">5</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">6</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">7</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">8</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">9</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">10</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">11</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">12</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">13</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">14</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">15</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">16</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">17</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">18</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">19</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">20</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">21</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">22</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">23</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">24</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">25</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">26</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">27</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">28</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">29</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">30</div>
        <div className="text-gray-500 dark:text-gray-400 text-sm">31</div>
      </div>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
