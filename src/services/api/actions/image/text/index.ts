import api from '@/services/api'

const GET_IMAGE_TEXT = 'v1/image/texts'

type TyGetImageText = {
  text: string
  color?: string
  opacity?: string
}

export function getImageText({
  text,
  color = '000000',
  opacity = '1'
}: TyGetImageText) {
  return api
    .get<Blob>(
      `${GET_IMAGE_TEXT}?text=${text}&color=${color}&opacity=${opacity}`
    )
    .then(async ({ data }) => {
      const svgData = await data.text()

      const blob = new Blob([svgData], { type: 'image/svg+xml' })
      return URL.createObjectURL(blob)
    })
}
