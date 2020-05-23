import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/index-page-preview'
import TechPreview from './preview-templates/tech-preview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('technologies', TechPreview)