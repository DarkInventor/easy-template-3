"use client";

import React from 'react'

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0" id="footer">
    <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
      <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
        Built by{" "}
        <a
          href="https://x.com/kathanmehtaa"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Kathan
        </a>
        . The source code is available on{" "}
        <a
          href="https://easyui.pro/templates"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Easy UI
        </a>
        .
      </p>
    </div>
  </footer>
  )
}

