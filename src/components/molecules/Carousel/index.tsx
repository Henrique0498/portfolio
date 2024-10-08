import { Carousel as CarouselAntd, CarouselProps } from 'antd'

interface InCarousel extends CarouselProps {}

export default function Carousel(props: InCarousel) {
  return <CarouselAntd {...props} />
}
