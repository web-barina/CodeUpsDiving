<!--キャンペーン-->
<?php get_header(); ?>
<section class="campaign campaign-wrapper">
    <div class="campaign__inner inner">
        <div class="campaign__tabs tabs">
            <a href="<?php echo get_post_type_archive_link('campaign'); ?>"
                class="tabs__item tab <?php echo !is_tax('campaign_category') ? 'js-active' : ''; ?>">ALL</a>
            <?php
            $terms = get_terms(array(
                'taxonomy' => 'campaign_category',
                'hide_empty' => false,
            ));
            foreach ($terms as $term) :
            ?>
            <a href="<?php echo get_term_link($term); ?>"
                class="tabs__item tab <?php echo is_tax('campaign_category', $term->slug) ? 'js-active' : ''; ?>">
                <?php echo esc_html($term->name); ?></a>
            <?php endforeach; ?>
        </div>
        <div class="campaign__cards-inner">
            <?php if (have_posts()) : ?>
            <ul class="campaign__cards">
                <?php while (have_posts()) : the_post(); ?>
                <li class="campaign__cards-item campaign-card" id="license-campaign">
                    <figure class="campaign-card__img">
                        <img src="<?php the_field("campaign_img"); ?>" alt="<?php the_field("campaign_title"); ?>">
                    </figure>
                    <div class="campaign-card__body  campaign-card__body--lower">
                        <div class="campaign-card__category">
                            <?php
                                $terms = get_the_terms($post->ID, 'campaign_category');
                                if ($terms && !is_wp_error($terms)):
                                    $term_list = array();
                                    foreach ($terms as $term):
                                        $term_list[] = $term->name;
                                    endforeach;
                                    echo implode(', ', $term_list);
                                endif;
                            ?>
                        </div>
                        <div class="campaign-card__title-wrapper">
                            <h3 class="campaign-card__title campaign-card__title--lower">
                                <?php the_field("campaign_title"); ?></h3>
                        </div>
                    </div>
                    <div class="campaign-card__contents">
                        <p class="campaign-card__text campaign-card__text--lower">
                            <?php the_field("campaign_text"); ?>
                        </p>
                        <div class="campaign-card__price-wrapper">
                            <p class="campaign-card__pre-price">
                                <?php the_field("campaign_pre-price"); ?>
                            </p>
                            <p class="campaign-card__after-price">
                                <?php the_field("campaign_after-price"); ?></p>
                        </div>
                        <p class="campaign-card__detail"><?php the_field("campaign_content"); ?>
                        </p>
                        <p class="campaign-card__date"><?php the_field("campaign_period"); ?></p>
                        <p class="campaign-card__reserve">ご予約・お問い合わせはコチラ</p>
                        <div class="campaign-card__btn-wrapper">
                            <a href="<?php echo esc_url(home_url('contact')); ?>" class="btn">Contact us
                                <span></span>
                            </a>
                        </div>
                    </div>
                </li>
                <?php endwhile; ?>
            </ul>
            <?php endif; ?>
        </div>
    </div>
    <div class="campaign__pager-wrapper pager-wrapper">
        <div class="campaign__pager pager">
            <ul class="pager__number-wrapper">
                <?php wp_pagenavi(); ?>
            </ul>
        </div>
    </div>
</section>
<?php get_footer(); ?>