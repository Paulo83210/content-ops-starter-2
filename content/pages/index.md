---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: Découvrir le chantier ATE
      color: text-dark
      type: TitleBlock
    subtitle: Subtitle goes here
    text: >+
      Vous venez de vivre une expérience unique avec notre croupier virtuel,
      capable de vous recommander

      des jeux sur mesure, même pour les demandes les plus surprenantes. Tout
      ça,

      grâce à la magie de vos données !


      Ce n’est qu’un aperçu de ce que permet le chantier ATE. En connectant
      intelligemment plusieurs sources de données, nous

      pouvons créer des expériences révolutionnaires qui réinventent l'avenir du
      divertissement chez Loto-Québec.



    actions: []
    media:
      url: '/images/Capture d’écran, le 2024-10-22 à 16.03.59.png'
      altText: Unblock your team boost your time to production preview
      elementId: ''
      type: ImageBlock
    badge:
      label: ATE
      color: text-primary
      type: Badge
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - subtitle: Nos partenaires
    images:
      - url: /images/empathy-logo.svg
        altText: Empathy logo
        type: ImageBlock
      - url: /images/wellster-logo.svg
        altText: Wellster logo
        type: ImageBlock
      - url: /images/vise-logo.svg
        altText: Vise logo
        type: ImageBlock
      - url: /images/telus-logo.svg
        altText: Telus logo
        type: ImageBlock
      - url: /images/contenful-logo.svg
        altText: Contentful logo
        type: ImageBlock
      - url: /images/sanity-logo.svg
        altText: Sanity logo
        type: ImageBlock
      - url: /images/rangle-logo.svg
        altText: Rangle logo
        type: ImageBlock
    motion: move-to-left
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    type: ImageGallerySection
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - title:
      text: En savoir plus
      color: text-dark
      type: TitleBlock
    subtitle: ''
    text: ''
    media:
      fields:
        - name: Prénom et Nom
          label: Prénom et Nom
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
        - name: Email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
        - type: TextareaFormControl
          name: retours
          label: J'aimerais vous partager...
          hideLabel: true
          placeholder: J'aimerais vous partager...
          isRequired: false
          width: full
        - type: CheckboxFormControl
          name: confirmation
          label: J'accepte de recevoir des nouvelles de la part de Valtech
          isRequired: false
          width: full
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Soumettre
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: null
    badge:
      label: RESTONS EN CONTACT
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    type: GenericSection
seo:
  metaTitle: Home - Demo site
  metaDescription: This demo site is built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
