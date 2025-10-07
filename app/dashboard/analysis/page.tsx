import MonthlyIncomeBreakdown from '@/component/Analytics/IncomeBreakDown'
import RevenueChart from '@/component/Analytics/Revenue'
import React from 'react'

function page() {
  return (
    <div>
        <MonthlyIncomeBreakdown/>
        <RevenueChart/>
    </div>
  )
}

export default page