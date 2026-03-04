// hooks/use-compare.ts
"use client"

import { useState, useCallback } from "react"

export function useCompare(maxItems = 3) {
  const [compareList, setCompareList] = useState<string[]>([])

  const addToCompare = useCallback((propertyId: string) => {
    setCompareList((prev) => {
      if (prev.includes(propertyId)) return prev
      if (prev.length >= maxItems) return prev
      return [...prev, propertyId]
    })
  }, [maxItems])

  const removeFromCompare = useCallback((propertyId: string) => {
    setCompareList((prev) => prev.filter((id) => id !== propertyId))
  }, [])

  const clearCompare = useCallback(() => {
    setCompareList([])
  }, [])

  const isInCompare = useCallback((propertyId: string) => {
    return compareList.includes(propertyId)
  }, [compareList])

  return {
    compareList,
    addToCompare,
    removeFromCompare,
    clearCompare,
    isInCompare,
    canAddMore: compareList.length < maxItems,
  }
}