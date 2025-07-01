// TypeScript type definitions for the project

// Core types for MCD generation
export interface MCDEntity {
  id: string
  name: string
  attributes: MCDAttribute[]
}

export interface MCDAttribute {
  id: string
  name: string
  type: string
  isPrimaryKey: boolean
  isRequired: boolean
}

export interface MCDRelationship {
  id: string
  from: string
  to: string
  type: 'one-to-one' | 'one-to-many' | 'many-to-many'
  label?: string
}

export interface MCDDiagram {
  entities: MCDEntity[]
  relationships: MCDRelationship[]
  metadata: {
    title: string
    createdAt: string
    version: string
  }
}

// API types
export interface GenerationRequest {
  textBrief: string
  apiKey: string
}

export interface GenerationResponse {
  success: boolean
  diagram?: MCDDiagram
  mermaidCode?: string
  error?: string
}

// Usage tracking types
export interface UsageStats {
  requestsUsed: number
  requestsLimit: number
  resetDate: string
}

// Theme types
export type Theme = 'light' | 'dark' | 'system'

// Export format types
export type ExportFormat = 'svg' | 'png' | 'jpeg' | 'mermaid'