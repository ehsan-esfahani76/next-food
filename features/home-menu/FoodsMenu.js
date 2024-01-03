import Button from '@/components/Button'
import React from 'react'

export default function Products({data}) {
  return (
    <div className='flex justify-center gap-4'>
        {
            data?.tabList?.map(tab => (
                <Button>{tab}</Button>
            ))
        }
        {

        }
    </div>
  )
}
