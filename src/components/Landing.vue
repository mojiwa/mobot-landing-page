<script lang="ts">
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Landing',
    components: {
      Bars3Icon,
      XMarkIcon,
      Popover,
      PopoverButton,
      PopoverPanel
    },
    setup() {
      
      const navigation = [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },        
        { name: 'Support', href: '#support' },
        { name: 'Documentation', href: '#documentation' },
      ];
      
      return {
       navigation,       
      }
    }
  });
</script>


<template>
 <div class="relative container mx-auto overflow-hidden bg-white rounded-t-lg max-w-7xl">
    <div class="mx-auto">
      <div class="relative z-10 bg-white pb-32">
        <Popover>
          <div class="relative pt-6 px-8 flex">
            <a href="#">
              <div class="hidden md:flex">
                <img class="h-10" src="/robot-face.svg" alt="MoBot Logo" />
                <div class="ml-5 text-2xl font-bold text-mobot-purple-400 self-center">MoBot</div>
              </div>            
            </a>
            <nav class="relative flex items-center h-10 justify-center" aria-label="Global">
              <div class="flex flex-shrink-0 items-center flex-grow-0">
                <div class="flex w-full items-center justify-between">
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-mobot-gray-200 hover:bg-mobot-gray-100 hover:text-mobot-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mobot-purple-400">
                      <span class="sr-only">Open main menu</span>
                      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:space-x-10 md:ml-16 xl:ml-28 xl:space-x-32">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-mobot-dark-gray-200 hover:text-mobot-dark-gray-300">{{ item.name }}</a>
                <a href="#" class="font-medium text-mobot-purple-400 hover:text-mobot-purple-300">Log in</a>
              </div>
            </nav>
          </div>

          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden">
              <div class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                  <a href="#">
                    <div class="flex">                    
                        <img class="h-8 w-auto" src="/robot-face.svg" alt="" />
                        <div class="ml-5 text-2xl font-bold text-mobot-purple-400 self-center">MoBot</div>                  
                    </div>
                  </a>
                  <div class="-mr-2">
                    <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-mobot-gray-200 hover:bg-mobot-gray-100 hover:text-mobot-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mobot-purple-400">
                      <span class="sr-only">Close main menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="space-y-1 px-2 pt-2 pb-3">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-mobot-dark-gray-200 hover:bg-mobot-gray-100 hover:text-mobot-dark-gray-300">{{ item.name }}</a>
                </div>
                <a href="#" class="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-mobot-purple-400 hover:bg-mobot-gray-100">Log in</a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <main class="mx-auto px-8 mt-28">
          <div class="text-left">
            <div class="flex">
              <img alt="MoBot Logo" class="h-24 lg:h-36 w-auto mr-6" src="/robot.svg" />
              <h1 class="text-4xl font-bold tracking-tight text-mobot-dark-gray-300 sm:text-5xl lg:text-6xl w-full">
                <span class="inline">The only Discord bot</span>
                <p>
                  <span class="text-mobot-purple-400 inline">your server needs</span>
                </p>
              </h1>
            </div>
            <p class="mt-3 text-base text-mobot-dark-gray-200 sm:mx-auto sm:mt-5 lg:max-w-3xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Imagine if you could have one Discord bot to manage role reactions, pronoun picking, custom commands, streaming alerts, and more! All at a fraction of the cost compared to the competition.</p>
            <p class="mt-3 text-base text-mobot-dark-gray-200 sm:mx-auto sm:mt-5 lg:max-w-3xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">MoBot is coming soon...</p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-mobot-purple-300 px-8 py-3 text-base font-medium text-white hover:bg-mobot-purple-400 md:py-4 md:px-10 md:text-lg">Add Bot</a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-mobot-light-purple-100 px-8 py-3 text-base font-medium text-mobot-light-purple-400 hover:bg-mobot-light-purple-200 md:py-4 md:px-10 md:text-lg">Learn More</a>
              </div>
            </div>
          </div>
          <div>
            <div class="mt-10">
              <a id="features">
                <div class="text-2xl font-bold text-mobot-dark-gray-300-400 self-center">Coming Soon...</div>
                <img src="https://www.upvoty.com/wp-content/uploads/2020/09/features.png" alt="features"/>
              </a>
            </div>
            <div class="mt-10">
              <a id="pricing" class="mt-10">
                <div class="text-2xl font-bold text-mobot-dark-gray-300-400 self-center">Coming Soon...</div>
                <img src="https://img.freepik.com/free-vector/modern-comparison-plans-pricing-template_1017-32013.jpg?w=2000" alt="pricing"/>
              </a>
            </div>
            <div class="mt-10">
              <a id="support" class="mt-10">
                <div class="text-2xl font-bold text-mobot-dark-gray-300-400 self-center">Coming Soon...</div>
                <img src="https://d2gppjca7iyv2p.cloudfront.net/reportandsupport.yorksj.ac.uk/HE3Bs7c33DFJa5Zz" alt="support"/>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>