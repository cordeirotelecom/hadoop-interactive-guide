import { Loader2 } from 'lucide-react'
import { Card, CardContent } from "./ui/card.jsx"

const LoadingSpinner = ({ message = "Carregando..." }) => {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col items-center justify-center py-8 space-y-4">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <p className="text-gray-600 dark:text-gray-400">{message}</p>
      </CardContent>
    </Card>
  )
}

export default LoadingSpinner