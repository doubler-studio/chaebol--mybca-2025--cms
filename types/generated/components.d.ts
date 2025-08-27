import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentAccordion extends Struct.ComponentSchema {
  collectionName: 'components_component_accordions';
  info: {
    displayName: 'Accordion';
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

export interface FeatureKetentuan extends Struct.ComponentSchema {
  collectionName: 'components_feature_ketentuans';
  info: {
    displayName: 'Accordion Tab';
  };
  attributes: {
    biaya: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    limit: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    setoran_awal: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    tambah_dana: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalAccordions extends Struct.ComponentSchema {
  collectionName: 'components_global_accordions';
  info: {
    displayName: 'Accordions';
  };
  attributes: {
    accordion: Schema.Attribute.Component<'component.accordion', true>;
  };
}

export interface GlobalBanner extends Struct.ComponentSchema {
  collectionName: 'components_global_banners';
  info: {
    displayName: 'Banner';
    icon: 'picture';
  };
  attributes: {
    body: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
    image_url: Schema.Attribute.String & Schema.Attribute.Required;
    Links: Schema.Attribute.Component<'component.button', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.accordion': ComponentAccordion;
      'component.button': ComponentButton;
      'feature.ketentuan': FeatureKetentuan;
      'global.accordions': GlobalAccordions;
      'global.banner': GlobalBanner;
    }
  }
}
