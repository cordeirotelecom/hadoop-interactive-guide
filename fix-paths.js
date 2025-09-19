import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

const componentsDir = './src/components'

async function fixPaths() {
  try {
    const files = await readdir(componentsDir)
    
    for (const file of files) {
      if (file.endsWith('.jsx') && file !== 'ui') {
        const filePath = join(componentsDir, file)
        let content = await readFile(filePath, 'utf-8')
        
        // Fix incorrect relative paths
        content = content.replace(
          /from "\.\.\/ui\//g,
          'from "./ui/'
        )
        
        await writeFile(filePath, content)
        console.log(`Fixed paths in ${file}`)
      }
    }
    
    console.log('All paths fixed!')
  } catch (error) {
    console.error('Error fixing paths:', error)
  }
}

fixPaths()