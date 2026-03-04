// hooks/use-property-search.ts
"use client"

import { useState, useCallback } from "react"
import { PropertySearchFilters } from "../types/property"

export function usePropertySearch() {
  const [filters, setFilters] = useState<PropertySearchFilters>({
    listingType: "sale",
    sortBy: "newest",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState([])

  const updateFilters = useCallback((newFilters: Partial<PropertySearchFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }, [])

  const resetFilters = useCallback(() => {
    setFilters({
      listingType: "sale",
      sortBy: "newest",
    })
  }, [])

  const search = useCallback(async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsLoading(false)
  }, [filters])

  return {
    filters,
    updateFilters,
    resetFilters,
    search,
    isLoading,
    results,
  }
}