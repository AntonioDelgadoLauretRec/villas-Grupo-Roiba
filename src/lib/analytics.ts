/**
 * Analytics event tracking utility
 * Works with both GTM (dataLayer) and direct GA4 (gtag)
 */

// Type-safe event names
type AnalyticsEvent =
  | 'form_submit'
  | 'whatsapp_click'
  | 'cta_click'
  | 'blog_view'
  | 'brochure_download'
  | 'contact_form'
  | 'guide_request'

interface EventParams {
  [key: string]: string | number | boolean | undefined
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    gtag: (...args: unknown[]) => void
  }
}

/**
 * Push event to dataLayer (GTM) or gtag (GA4)
 */
export function trackEvent(event: AnalyticsEvent, params?: EventParams) {
  if (typeof window === 'undefined') return

  // GTM dataLayer push
  if (window.dataLayer) {
    window.dataLayer.push({
      event,
      ...params,
    })
  }

  // Direct gtag fallback
  if (window.gtag) {
    window.gtag('event', event, params)
  }
}

/**
 * Track CTA button clicks
 */
export function trackCTA(label: string, location: string) {
  trackEvent('cta_click', {
    cta_label: label,
    cta_location: location,
  })
}

/**
 * Track form submissions
 */
export function trackFormSubmit(formName: string, source?: string) {
  trackEvent('form_submit', {
    form_name: formName,
    form_source: source,
  })
}

/**
 * Track WhatsApp clicks
 */
export function trackWhatsApp(location: string) {
  trackEvent('whatsapp_click', {
    click_location: location,
  })
}

/**
 * Track blog article views
 */
export function trackBlogView(slug: string, title: string) {
  trackEvent('blog_view', {
    article_slug: slug,
    article_title: title,
  })
}

/**
 * Update consent state (called from CookieConsent)
 */
export function updateConsent(granted: boolean) {
  if (typeof window === 'undefined') return

  const consentState = granted ? 'granted' : 'denied'

  if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: consentState,
      ad_storage: consentState,
      ad_user_data: consentState,
      ad_personalization: consentState,
    })
  }
}
