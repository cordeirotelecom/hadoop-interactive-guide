import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

const componentsDir = './src/components'

async function fixQuotes() {
  try {
    const files = await readdir(componentsDir)
    
    for (const file of files) {
      if (file.endsWith('.jsx') && file !== 'ui') {
        const filePath = join(componentsDir, file)
        let content = await readFile(filePath, 'utf-8')
        
        // Fix quote mismatches in imports
        content = content.replace(
          /from "\.\.\/ui\/([^"]+)\.jsx'/g,
          'from "../ui/$1.jsx"'
        )
        
        await writeFile(filePath, content)
        console.log(`Fixed quotes in ${file}`)
      }
    }
    
    console.log('All quotes fixed!')
  } catch (error) {
    console.error('Error fixing quotes:', error)
  }
}

fixQuotes()