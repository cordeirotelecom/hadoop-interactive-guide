import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

const componentsDir = './src/components'

async function fixImports() {
  try {
    const files = await readdir(componentsDir)
    
    for (const file of files) {
      if (file.endsWith('.jsx') && file !== 'ui') {
        const filePath = join(componentsDir, file)
        let content = await readFile(filePath, 'utf-8')
        
        // Fix UI component imports
        content = content.replace(
          /from '@\/components\/ui\//g,
          'from "../ui/'
        )
        
        await writeFile(filePath, content)
        console.log(`Fixed imports in ${file}`)
      }
    }
    
    console.log('All imports fixed!')
  } catch (error) {
    console.error('Error fixing imports:', error)
  }
}

fixImports()