<!--料金一覧-->
<?php get_header(); ?>
<section class="price price-wrapper">
    <div class="price__inner inner">
        <div class="price__menu-wrapper menus">
            <div class="menus__item menu" id="license-price">
                <div class="menu__title-wrapper">
                    <h2 class="menu__title">ライセンス取得</h2>
                    <img class="menu__title-img"
                        src="<?php echo get_theme_file_uri(); ?>/assets/images/common/price-deco.png"
                        alt="クジラのアイコンイラスト" />
                </div>
                <table class="menu__lists" aria-label="ライセンス講習">
                    <tbody>
                        <?php
                            $license_prices = SCF::get('license_price');
                            if (!empty($license_prices)) :
                                foreach ($license_prices as $license_price) :
                                    $license_menu = $license_price['license_menu'];
                                    $license_yen = $license_price['license_yen'];
                        ?>
                        <tr>
                            <td class="menu__name">
                                <?php echo esc_html($license_menu); ?>
                            </td>
                            <td class="menu__yen">
                                <?php echo esc_html($license_yen); ?> </td>
                        </tr>
                        <?php
                            endforeach;
                            endif;
                        ?>
                    </tbody>
                </table>
            </div>
            <div class="menus__item menu" id="trial-price">
                <div class="menu__title-wrapper">
                    <h2 class="menu__title">体験ダイビング</h2>
                    <img class="menu__title-img"
                        src="<?php echo get_theme_file_uri(); ?>/assets/images/common/price-deco.png"
                        alt="クジラのアイコンイラスト" />
                </div>
                <table class="menu__lists" aria-label="体験ダイビング">
                    <tbody>
                        <?php
                            $trial_prices = SCF::get('trial_price');
                            if (!empty($trial_prices)) :
                            foreach ($trial_prices as $trial_price) :
                            $trial_menu = $trial_price['trial_menu'];
                            $trial_yen = $trial_price['trial_yen'];
                        ?>
                        <tr>
                            <td class="menu__name">
                                <?php echo esc_html($trial_menu); ?>
                            </td>
                            <td class="menu__yen">
                                <?php echo esc_html($trial_yen); ?>
                            </td>
                        </tr>
                        <?php
                            endforeach;
                            endif;
                        ?>
                    </tbody>
                </table>
            </div>
            <div class="menus__item menu" id="fun-price">
                <div class="menu__title-wrapper">
                    <h2 class="menu__title">ファンダイビング</h2>
                    <img class="menu__title-img"
                        src="<?php echo get_theme_file_uri(); ?>/assets/images/common/price-deco.png"
                        alt="クジラのアイコンイラスト" />
                </div>
                <table class="menu__lists" aria-label="ファンダイビング">
                    
                    <tbody>
                        <?php
                            $fun_prices = SCF::get('fun_price');
                                if (!empty($fun_prices)) :
                                foreach ($fun_prices as $fun_price) :
                                $fun_menu = $fun_price['fun_menu'];
                                $fun_yen = $fun_price['fun_yen'];
                        ?>
                        <tr>
                            <td class="menu__name">
                                <?php echo esc_html($fun_menu); ?>
                            </td>
                            <td class="menu__yen">
                                <?php echo esc_html($fun_yen); ?> </td>
                        </tr>
                    </tbody>
                    <?php
                        endforeach;
                        endif;
                    ?>
                </table>
            </div>
            <div class="menus__item menu" id="special-price">
                <div class="menu__title-wrapper">
                    <h2 class="menu__title">スペシャルダイビング</h2>
                    <img class="menu__title-img"
                        src="<?php echo get_theme_file_uri(); ?>/assets/images/common/price-deco.png"
                        alt="クジラのアイコンイラスト" />
                </div>
                <table class="menu__lists" aria-label="スペシャルダイビング">
                    <tbody>
                        <?php
                            $special_prices = SCF::get('special_price');
                            if (!empty($special_prices)) :
                            foreach ($special_prices as $special_price) :
                            $special_menu = $special_price['special_menu'];
                            $special_yen = $special_price['special_yen'];
                         ?>
                        <tr>
                            <td class="menu__name">
                                <?php echo esc_html($special_menu); ?>
                            </td>
                            <td class="menu__yen">
                                <?php echo esc_html($special_yen); ?> </td>
                        </tr>
                        <?php
                            endforeach;
                            endif;
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
<?php get_footer(); ?>