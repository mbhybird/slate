/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.wrapText('[[', ']]')
}

export const input = (
  <value>
    <document>
      <paragraph>
        wo<anchor />rd<focus />
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        wo[[<anchor />rd<focus />]]
      </paragraph>
    </document>
  </value>
)
