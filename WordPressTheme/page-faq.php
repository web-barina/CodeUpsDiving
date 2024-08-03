<!--よくある質問-->
<?php get_header(); ?>
<section class="contact-faq">
    <div class="contact-faq__inner inner">
        <div class="contact-faq__wrapper faq-wrapper">
            <?php
                $faqs = SCF::get('faq'); 
                if (!empty($faqs)) :
                    foreach ($faqs as $faq) :
                        $question = $faq['faq_question'];
                        $answer = $faq['faq_answer'];
            ?>
            <div class="faq-wrapper__item faq">
                <div class="faq__question">
                    <h2><?php echo esc_html($question); ?></h2>
                </div>
                <div class="faq__answer">
                    <p><?php echo nl2br(esc_html($answer)); ?></p>
                </div>
            </div>
            <?php
                endforeach;
                endif;
            ?>
        </div>
    </div>
</section>
<?php get_footer(); ?>