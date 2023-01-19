import { createContext, ReactNode, useCallback, useState } from 'react'
import * as ToastRUI from '@radix-ui/react-toast'
import { Toast } from '../components/Toast'
import { v4 as uuid } from 'uuid'
import { styled } from '../styles'

export const ToastViewport = styled(ToastRUI.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 25,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

interface ToastContextProviderProps {
  children: ReactNode
}

interface ToastMessage {
  id: string
  title: string
  subtitle: string
}

interface ToastContextType {
  addToast: (message: Omit<ToastMessage, 'id'>) => void
  removeToast: (id: string) => void
}

export const ToastContext = createContext({} as ToastContextType)

export const ToastContextProvider = ({
  children,
}: ToastContextProviderProps) => {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  const addToast = useCallback(
    ({ title, subtitle }: Omit<ToastMessage, 'id'>) => {
      const toast = {
        id: uuid(),
        title,
        subtitle,
      }

      setMessages((state) => [...state, toast])
    },
    [],
  )

  const removeToast = useCallback(
    (id: string) =>
      setMessages((state) => state.filter((message) => message.id !== id)),
    [],
  )

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastRUI.Provider>
        {messages.map((message) => (
          <Toast
            key={message.id}
            id={message.id}
            title={message.title}
            subtitle={message.subtitle}
          />
        ))}
        <ToastViewport />
      </ToastRUI.Provider>
      {children}
    </ToastContext.Provider>
  )
}
