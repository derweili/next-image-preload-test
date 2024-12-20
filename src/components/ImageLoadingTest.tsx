import Image from 'next/image'
import React from 'react'

const ImageLoadingTest = () => {
	return (
		<div>
			<Image src="https://picsum.photos/seed/priority/200/300" alt="Logo" width={200} height={200} priority />
			<div style={{ height: 2000, width: 200 }} />
			<Image src="https://picsum.photos/seed/no-priority-loading-eager/200/300" alt="Logo" width={200} height={200} priority={false} loading="eager" />
		</div>
	)
}

export default ImageLoadingTest