<?php
$inc_root_path = '../';
$inc_lang_path = substr($inc_root_path, 0, -3);
include $inc_lang_path . "lang.php";
include $inc_root_path . "include/config.php";
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?= $lang_name[$lang] ?>" lang="<?= $lang_name[$lang] ?>">

    <head>
        <?php include $inc_root_path . "inc_meta.php"; ?>
    </head>

    <body>
    <div class="overflow_wrapper">
        <?php include $inc_lang_path . "inc_common/proj_wrapper.php"; ?>
        <div class="bkgrd-circle"></div>
        <div class="bkgrd-color"></div>
        <main>
            <section class="about-txt_wrapper">
                <p>
                    <strong>Hunt Hung</strong><br><br>
                    is a communication designer graduated from school of design department, HK PolyU.
                    <br><br>
                    It is an immense passion of him to work on the creative field and to collaborate with other people sharing the same passion.
                    <br><br>
                    He is capable of doing any prints, editorial, book and web design. Front-end development is also available as well.
                </p>
                <a href="tel:93061692">+852 9306 1692</a><br>
                <a href="mailto:hunter252006@gmail.com">hunter252006@gmail.com</a>
                <div class="social-icon_holder">
                    <a href="https://www.pinterest.com/hunter252006/" target="_blank"><img src="../images/common/pin.svg"></a>
                    <a href="https://www.linkedin.com/in/hunt-hung-896348142/" target="_blank"><img src="../images/common/linkedin.svg"></a>
                    <a href="https://medium.com/@hunter252006" target="_blank"><img src="../images/common/medium.svg"></a>
                </div>
            </section>

            <section class="works_wrapper">
                <div class="works_inner_wrapper" data-cat="identity">
                    <div class="work_each">
                        <img src="../images/thumbnails/home_garden.jpg" data-title="Home Garden Florist" data-cat="Logo Design" data-color="#0b4b4f">
                    </div>
                    <div class="work_each">
                        <img src="../images/thumbnails/ses.jpg" data-title="EDUHK SES" data-cat="Logo Design" data-color="#246d6b">
                    </div>
                </div>
                <div class="works_inner_wrapper" data-cat="uiux">
                    <div class="work_each">
                        <img src="../images/thumbnails/jewellerynet.png" data-title="JewelleryNet.com" data-cat="Interface Design" data-color="#ffb864">
                    </div>
                    <div class="work_each">
                        <img src="../images/thumbnails/fzl.png" data-title="Painting Her Way" data-cat="Interface Design" data-color="#ef765e">
                    </div>
                    <div class="work_each">
                        <img src="../images/thumbnails/hkicl.png" data-title="HKICL Main Site" data-cat="Interface Design / fn-coding" data-color="#346aaa">
                    </div>
                    <div class="work_each">
                        <img src="../images/thumbnails/agility.png" data-title="Mercedes Benz Agility" data-cat="Interface Design" data-color="#212121">
                    </div>
                    <div class="work_each">
                        <img src="../images/thumbnails/zungfu.png" data-title="Zung Fu Ltd." data-cat="Interface Design" data-color="#d6a167">
                    </div>
                    <div class="work_each">
                        <img src="../images/thumbnails/smartone.png" data-title="Smartone Care App" data-cat="Interface Design" data-color="#ed1c24">
                    </div>
                    <div class="work_each">
                        <img src="../images/thumbnails/slasher.png" data-title="Slasher Communications" data-cat="Interface Design / fn-coding" data-color="#6986ff">
                    </div>
                </div>
                <div class="works_inner_wrapper" data-cat="graphics">
                    <div class="work_each">
                        <img src="../images/thumbnails/mak's-beer.png"  data-title="Mak's Beer Packaging" data-cat="Packaging Design" data-color="#ed1d2a">
                    </div>
                    <div class="work_each">
                        <img src="../images/thumbnails/anybikes.jpg" data-title="Anybikes Campaign" data-cat="Campaign Design" data-color="#3a3a3a">
                    </div>
                    <div class="work_each">
                        <img src="../images/thumbnails/luplup.png" data-title="Feeding HK Campaign" data-cat="Campaign Design" data-color="#ff912e">
                    </div>
                    <div class="work_each">
                        <img src="../images/thumbnails/mpfa.png" data-title="MPFA Annual Report" data-cat="Editorial Design" data-color="#f2c051">
                    </div>
                </div>
            </section>

            <section class="overlay_wrapper">
                <div class="desc_wrapper">
                    <h1 href="#" class="project-title"></h1>
                    <div class="deco-line"></div>
                    <p class="project-cat"></p>
                </div>
            </section>

            <nav class="nav_wrapper left">
                <a href="#" id="works" class="active">Works</a>
                <a href="#" id="prev" class="works_active">Prev</a>
            </nav>
            <nav class="nav_wrapper right">
                <a href="#" id="about" class="active">About Me</a>
                <a href="#" id="next" class="works_active">Next</a>
            </nav>

            <section class="work-index_wrapper">
            </section>
        </main>
        <section class="main-txt_wrapper">
            <a href="#" id="home">Hunt Hunt Work</a>
            <div class="deco-line"></div>
            <p>Design Portfolio</p>
            <nav class="sort-nav">
                <a href="#">Identity</a>
                <a href="#">UIUX</a>
                <a href="#">Graphics</a>
            </nav>
        </section>
    </div>
    </body>
</html>