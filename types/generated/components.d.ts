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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'card.keuntungan': CardKeuntungan;
      'component.accordion': ComponentAccordion;
      'component.button': ComponentButton;
      'component.youtube': ComponentYoutube;
      'feature.ketentuan': FeatureKetentuan;
      'feature.list-keuntungan': FeatureListKeuntungan;
      'feature.tutorial-video': FeatureTutorialVideo;
    }
  }
}
