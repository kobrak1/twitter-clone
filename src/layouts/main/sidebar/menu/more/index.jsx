import { Popover } from "@headlessui/react"

const More = () => {
  return (
    <Popover>
      <Popover.Button>
        {/* Your button or trigger */}
        <button>Open Popover</button>
      </Popover.Button>
      <Popover.Panel className='bg-gray-200'>
        <div>
          <p>Popover Content</p>
        </div>
        <hr />
        <div>
          <p>Popover Content</p>
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default More
