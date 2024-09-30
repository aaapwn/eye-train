import React from 'react'
import ConfirmDialog from '@/components/ConfirmDialog'
import CustomDialog from '@/components/CustomDialog'
import { auth } from '@/lib/auth'

const page = () => {
    const session = auth()
  return (
    <div>
        <ConfirmDialog />
        <CustomDialog session={session} />
    </div>
  )
}

export default page
