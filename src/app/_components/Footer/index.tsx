'use client'

import React from 'react'

import { fetchFooter } from '../../_api/fetchGlobals'
import classes from './index.module.scss'
import FooterComponent from './FooterComponent'
import { Footer } from '../../../payload/payload-types'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <>
      <FooterComponent footer={footer} />
    </>
  )
}
