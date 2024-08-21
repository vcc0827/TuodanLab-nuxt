<script lang="ts" setup>
definePageMeta({ layout: 'page' });
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageSection>
      <!-- content -->
      <div class="pages_content w-full flex justify-center">
        <div class="mt-12 md:mt-20 flex flex-col justify-center w-full">
          <div
            class="w-full flex flex-col justify-center text-center text-[32px] md:text-[74px]"
          >
            优质单身青年聚集地
          </div>
          <div
            class="flex flex-col md:flex-row items-center md:justify-center mt-[33px] md:mt-[65px]"
          >
            <div
              class="flex md:flex-col items-center md:justify-start w-[343px] md:w-[360px] h-[112px] md:h-[320px] rounded-3xl custom-bg custom-shadow-mobile md:custom-shadow mb-[10px] md:mr-12 md:pt-14"
            >
              <div class="flex items-center justify-center">
                <img
                  src="https://static.hamu.site/home-page/auth.png"
                  class="w-16 h-16 md:w-24 md:h-24 mr-5 ml-7 md:mb-10 object-contain inline-block"
                />
              </div>
              <div
                class="flex flex-col items-start md:items-center justify-center"
              >
                <span class="text-xl font-semibold md:mb-2.5">实名制交友</span>
                <span class="text-sm opacity-70">严格身份实名制、真人审核</span>
              </div>
            </div>
            <div
              class="flex md:flex-col items-center md:justify-start w-[343px] md:w-[360px] h-[112px] md:h-[320px] rounded-3xl custom-bg custom-shadow-mobile md:custom-shadow mb-[10px] md:mr-12 md:pt-14"
            >
              <div class="flex items-center justify-center">
                <img
                  src="https://static.hamu.site/home-page/chat.png"
                  class="w-16 h-16 md:w-24 md:h-24 mr-5 ml-7 md:mb-10 object-contain inline-block"
                />
              </div>
              <div
                class="flex flex-col items-start md:items-center justify-center"
              >
                <span class="text-xl font-semibold md:mb-2.5">高效脱单</span>
                <span class="text-sm opacity-70">喜欢就直接获取联系方式</span>
              </div>
            </div>
            <div
              class="flex md:flex-col items-center md:justify-start w-[343px] md:w-[360px] h-[112px] md:h-[320px] rounded-3xl custom-bg custom-shadow-mobile md:custom-shadow mb-[10px] md:mr-12 md:pt-14"
            >
              <div class="flex items-center justify-center">
                <img
                  src="https://static.hamu.site/home-page/match.png"
                  class="w-16 h-16 md:w-24 md:h-24 mr-5 ml-7 md:mb-10 object-contain inline-block"
                />
              </div>
              <div
                class="flex flex-col items-start md:items-center justify-center"
              >
                <span class="text-xl font-semibold md:mb-2.5"
                  >拒绝无效匹配</span
                >
                <span class="text-sm opacity-70"
                  >精准推荐，每次匹配都有意义</span
                >
              </div>
            </div>
          </div>
          <div
            class="md:hidden flex items-center justify-center w-full mt-9 mb-[60px]"
          >
            <div class="flex flex-col mr-12">
              <div
                class="flex justify-center items-center w-24 h-24 rounded-xl bg-white custom-qrcode-box-shadow"
              >
                <img
                  src="https://static.hamu.site/home-page/miniprogram.jpg"
                  class="w-20 h-20"
                />
              </div>
              <div class="mt-2 text-center text-sm text-opacity-70 text-black">
                微信小程序
              </div>
            </div>
            <div class="flex flex-col">
              <div
                class="flex justify-center items-center w-24 h-24 rounded-xl bg-white custom-qrcode-box-shadow"
              >
                <img
                  src="https://static.hamu.site/home-page/official.jpeg"
                  class="w-20 h-20"
                />
              </div>
              <div class="mt-2 text-center text-sm opacity-70 text-black">
                微信公众号
              </div>
            </div>
          </div>
          <div
            class="hidden md:flex w-full justify-center mt-[98px] mb-[140px]"
          >
            <!-- 小程序 -->
            <div
              class="w-[187px] h-[52px] bg-white rounded-3xl mr-12 flex items-center relative"
            >
              <img
                src="https://static.hamu.site/home-page/i-miniprogram.png"
                class="w-8 h-8 ml-4 mr-2.5"
              />
              <div class="text-xl">微信小程序</div>
              <div
                class="hover-content absolute bottom-full transform -translate-x-1/2 mb-2 hidden opacity-0 transition-all duration-300 w-[187px]"
              >
                <div
                  class="w-[140px] h-[146px] rounded-xl bg-white custom-qrcode-box-shadow flex items-center justify-center mx-auto"
                >
                  <img
                    src="https://static.hamu.site/home-page/miniprogram.jpg"
                    class="w-[114px] h-[114px]"
                  />
                </div>
                <div
                  class="triangle absolute bottom-[-10px] left-1/2 transform -translate-x-1/2"
                ></div>
              </div>
            </div>
            <!-- 公众号 -->
            <div
              class="w-[187px] h-[52px] bg-white rounded-3xl flex items-center relative"
            >
              <img
                src="https://static.hamu.site/home-page/i-official.png"
                class="w-8 h-8 ml-4 mr-2.5"
              />
              <div class="text-xl">微信公众号</div>
              <div
                class="hover-content absolute bottom-full transform -translate-x-1/2 mb-2 hidden opacity-0 transition-all duration-300 w-[187px]"
              >
                <div
                  class="w-[140px] h-[146px] rounded-xl bg-white custom-qrcode-box-shadow flex items-center justify-center mx-auto"
                >
                  <img
                    src="https://static.hamu.site/home-page/official.jpeg"
                    class="w-[114px] h-[114px]"
                  />
                </div>
                <div
                  class="triangle absolute bottom-[-10px] left-1/2 transform -translate-x-1/2"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

<style scoped>
.button {
  width: 187px;
  height: 52px;
  background: #ffffff;
  border-radius: 26px;
}

.custom-shadow {
  box-shadow: 0px 12px 17px 0px rgba(165, 49, 62, 0.06);
}

.custom-qrcode-box-shadow {
  box-shadow: 0px 3px 8px 0px rgba(165, 49, 62, 0.06);
}

.custom-shadow-mobile {
  box-shadow: 0px 8px 14px 0px rgba(165, 49, 62, 0.06);
}

.custom-bg {
  background: rgba(255, 255, 255, 0.59);
}

.relative:hover .hover-content {
  display: block;
  opacity: 1;
  transform: translateY(-10px);
}

.hover-content {
  display: none;
  opacity: 0;
  transition: all 0.3s ease;
  width: 187px;
  transform: translateY(16px);
}

.triangle {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
