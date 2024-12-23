import Image from 'next/image'
import React from 'react'

const ImageLoadingTest = () => {
	return (
		<div>
			<h2>Priority image (should be preloaded)</h2>
			<Image src="https://picsum.photos/seed/priority/400/300" alt="Logo" width={400} height={300} priority />
			
			<h2 className='mt-4'>Priority image (should not get preloaded)</h2>
			<Image src="https://picsum.photos/seed/no-priority-loading-eager/400/300" alt="Logo" width={400} height={300} priority={false} loading="eager" />
		</div>
	)
}

export default ImageLoadingTest