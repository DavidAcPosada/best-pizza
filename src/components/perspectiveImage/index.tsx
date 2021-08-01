import {motion, useMotionValue, useTransform} from 'framer-motion'

interface PerspectiveImageProps {
  src: string;
  alt?: string;
  style?: any;
  className?: string;
}

const PerspectiveImage = ({ src, alt, ...props }: PerspectiveImageProps) => {
  const angle = 15

  const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)

  const rotateY = useTransform(x, [0, 1], [-angle, angle], {
    clamp: true
  })
  const rotateX = useTransform(y, [0, 1], [angle, -angle], {
    clamp: true
  })

  function onMove(e: any) {
    const bounds = e?.currentTarget?.getBoundingClientRect()
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientWidth
    x.set(xValue, true)
    y.set(yValue, true)
  }

  return (
    <motion.img
      onPointerMove={onMove}
      src={src}
      alt={alt}
      style={{
        rotateY,
        rotateX
      }}
      {...props}
    />
  )
}

export default PerspectiveImage