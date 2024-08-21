import api from '../..'
import { InGetCodeHighlighters } from './type'

const POST_CODE_HIGHLIGHTERS = 'v1/codeHighlighters'

export function getCodeHighlighters(data: InGetCodeHighlighters) {
  return api.post(POST_CODE_HIGHLIGHTERS, data).then(({ data }) => data)
}
