---
type: PageLayout
title: Netlify 2
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Netlify
      color: text-dark
    subtitle: Un Catalyseur pour la transformation numérique du chantier ATE
    text: "Netlify est une solution de déploiement et d’hébergement web qui révolutionne la manière dont les sites et applications sont gérés. En facilitant l’adoption de l’architecture\_composable, Netlify permet à Loto-Québec de moderniser ses infrastructures tout en accélérant la mise en ligne de nouvelles expériences numériques, garantissant ainsi une performance continue et une innovation rapide.\n\n\n\n"
    actions: []
    media:
      type: ImageBlock
      url: /images/main-hero.svg
      altText: Unblock your team boost your time to production preview
      elementId: ''
    badge:
      type: Badge
      label: ''
      color: text-primary
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
  - type: GenericSection
    title:
      type: TitleBlock
      text: Generic Section With A Form
      color: text-dark
    subtitle: Section with a form subtitle
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        icon: arrowRight
        iconPosition: right
        style: primary
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
    badge:
      type: Badge
      label: Contact Us
      color: text-primary
    colors: bg-light-fg-dark
slug: /Netlify2
seo:
  type: Seo
  metaTitle: Home - Demo site
  metaDescription: This demo site is built with Netlify Create
  socialImage: /images/main-hero.jpg
  metaTags: []
---
