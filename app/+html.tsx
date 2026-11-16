import { ScrollViewStyleReset, useServerDocumentContext } from 'expo-router/html'
import type { PropsWithChildren } from 'react'

export default function Root({ children }: PropsWithChildren) {
  // Expo SDK 58 以降、JS バンドルの script タグや react-native-web のスタイルは
  // headNodes / bodyNodes として渡されるため、自前で描画しないとアプリが起動しない
  const { htmlAttributes, headNodes, bodyAttributes, bodyNodes } = useServerDocumentContext()

  return (
    <html lang="ja" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>チェックリスト</title>
        <meta name="description" content="持ち物を確認するためのチェックリストアプリケーション" />
        <meta name="theme-color" content="#667eea" />
        <link rel="icon" href="./favicon.ico" sizes="48x48" />
        <link rel="icon" href="./icon.svg" sizes="any" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="./apple-touch-icon-180x180.png" />
        <link rel="manifest" href="./manifest.webmanifest" />
        <ScrollViewStyleReset />
        {headNodes}
      </head>
      <body {...bodyAttributes}>
        {children}
        {bodyNodes}
      </body>
    </html>
  )
}
