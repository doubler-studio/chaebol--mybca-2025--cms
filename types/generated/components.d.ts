import type { Schema, Struct } from '@strapi/strapi';

export interface CardKeuntungan extends Struct.ComponentSchema {
  collectionName: 'components_card_keuntungans';
  info: {
    displayName: 'Keuntungan';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    icon_url: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface Component2ColSlider extends Struct.ComponentSchema {
  collectionName: 'components_component_2_col_sliders';
  info: {
    displayName: 'Slide';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    image_url: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video_url: Schema.Attribute.String;
  };
}

export interface ComponentAccordion extends Struct.ComponentSchema {
  collectionName: 'components_component_accordions';
  info: {
    displayName: 'Accordion / Tab';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentButton extends Struct.ComponentSchema {
  collectionName: 'components_component_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
  };
}

export interface ComponentHeroSlider extends Struct.ComponentSchema {
  collectionName: 'components_component_hero_sliders';
  info: {
    displayName: 'Hero Slider';
    icon: 'picture';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'component.button', true>;
    icon_url: Schema.Attribute.String;
    slide: Schema.Attribute.Component<'component.2-col-slider', false>;
  };
}

export interface ComponentTeaser extends Struct.ComponentSchema {
  collectionName: 'components_component_teasers';
  info: {
    displayName: 'Teaser';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    image_url: Schema.Attribute.String;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentYoutube extends Struct.ComponentSchema {
  collectionName: 'components_component_youtubes';
  info: {
    displayName: 'Youtube';
    icon: 'play';
  };
  attributes: {
    title: Schema.Attribute.String;
    youtube_url: Schema.Attribute.String;
  };
}

export interface FaqListFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_list_faqs';
  info: {
    displayName: 'List FAQ';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button', true>;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FeatureKetentuan extends Struct.ComponentSchema {
  collectionName: 'components_feature_ketentuans';
  info: {
    displayName: 'Accordion Tab';
  };
  attributes: {
    tabs: Schema.Attribute.Component<'component.accordion', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FeatureListFeatures extends Struct.ComponentSchema {
  collectionName: 'components_feature_list_features';
  info: {
    displayName: 'List Features';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    features: Schema.Attribute.Relation<'oneToMany', 'api::feature.feature'>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FeatureListKeuntungan extends Struct.ComponentSchema {
  collectionName: 'components_feature_list_keuntungans';
  info: {
    displayName: 'List Keuntungan';
  };
  attributes: {
    cards: Schema.Attribute.Component<'card.keuntungan', true>;
  };
}

export interface FeatureTutorialVideo extends Struct.ComponentSchema {
  collectionName: 'components_feature_tutorial_videos';
  info: {
    displayName: 'Tutorial Video';
  };
  attributes: {
    title: Schema.Attribute.String;
    videos: Schema.Attribute.Component<'component.youtube', true>;
  };
}

export interface PromoListPromo extends Struct.ComponentSchema {
  collectionName: 'components_promo_list_promos';
  info: {
    displayName: 'List Promo';
  };
  attributes: {
    button: Schema.Attribute.Component<'component.button', true>;
    promos: Schema.Attribute.Relation<'oneToMany', 'api::promo.promo'>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TutorialListTutorials extends Struct.ComponentSchema {
  collectionName: 'components_tutorial_list_tutorials';
  info: {
    displayName: 'List Tutorials';
  };
  attributes: {
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
    tutorials: Schema.Attribute.Relation<'oneToMany', 'api::tutorial.tutorial'>;
  };
}

export interface TutorialStep extends Struct.ComponentSchema {
  collectionName: 'components_tutorial_steps';
  info: {
    displayName: 'Step';
    icon: 'bulletList';
  };
  attributes: {
    image_url: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.keuntungan': CardKeuntungan;
      'component.2-col-slider': Component2ColSlider;
      'component.accordion': ComponentAccordion;
      'component.button': ComponentButton;
      'component.hero-slider': ComponentHeroSlider;
      'component.teaser': ComponentTeaser;
      'component.youtube': ComponentYoutube;
      'faq.list-faq': FaqListFaq;
      'feature.ketentuan': FeatureKetentuan;
      'feature.list-features': FeatureListFeatures;
      'feature.list-keuntungan': FeatureListKeuntungan;
      'feature.tutorial-video': FeatureTutorialVideo;
      'promo.list-promo': PromoListPromo;
      'tutorial.list-tutorials': TutorialListTutorials;
      'tutorial.step': TutorialStep;
    }
  }
}
