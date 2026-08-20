<script setup>
import { ref } from 'vue'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-vue-next'

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const isSubmitted = ref(false)

const handleSubmit = () => {
  console.log('Form submitted:', { name: name.value, email: email.value, subject: subject.value, message: message.value })
  if (!name.value || !email.value || !message.value) return
  isSubmitted.value = true
  setTimeout(() => {
    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
    isSubmitted.value = false
  }, 4000)
}
</script>

<template>
  <div class="min-h-screen bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      
      <!-- Hero Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-4">
          <MessageSquare :size="16" />
          <span>We'd Love to Hear From You</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Get in Touch with <span class="text-blue-500">AmraPari</span>
        </h1>
        <p class="text-lg text-slate-400 max-w-2xl mx-auto">
          Have questions about our skill development courses, subscriptions, or partnership opportunities? Reach out to us anytime!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Contact Info Cards -->
        <div class="lg:col-span-5 space-y-6">
          <div class="bg-slate-800/80 backdrop-blur-md p-2 rounded-xl border border-slate-700/60 shadow-xl flex items-start gap-2">
            <div class="p-2 bg-blue-600/20 text-blue-400 rounded-xl">
              <Mail :size="24" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Email Us</h3>
              <p class="text-slate-400 text-sm mt-1">Our support team is here to help.</p>
              <a href="mailto:support@amrapari.com" class="text-blue-400 font-medium hover:underline mt-2 inline-block">
                support@amrapari.com
              </a>
            </div>
          </div>

          <div class="bg-slate-800/80 backdrop-blur-md p-2 rounded-2xl border border-slate-700/60 shadow-xl flex items-start gap-2">
            <div class="p-2 bg-blue-600/20 text-blue-400 rounded-xl">
              <Phone :size="24" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Call Us</h3>
              <p class="text-slate-400 text-sm mt-1">Mon-Fri from 9am to 6pm.</p>
              <a href="tel:+8801234567890" class="text-blue-400 font-medium hover:underline mt-2 inline-block">
                +880 1234-567890
              </a>
            </div>
          </div>

          <div class="bg-slate-800/80 backdrop-blur-md p-2 rounded-2xl border border-slate-700/60 shadow-xl flex items-start gap-2">
            <div class="p-2 bg-blue-600/20 text-blue-400 rounded-xl">
              <MapPin :size="24" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Visit Our Office</h3>
              <p class="text-slate-400 text-sm mt-1">
                Level 5, Skill Development Hub<br />
                Dhaka 1212, Bangladesh
              </p>
            </div>
          </div>

          <div class="bg-slate-800/80 backdrop-blur-md p-2 rounded-2xl border border-slate-700/60 shadow-xl flex items-start gap-2">
            <div class="p-2 bg-blue-600/20 text-blue-400 rounded-xl">
              <Clock :size="24" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white">Working Hours</h3>
              <p class="text-slate-400 text-sm mt-1">
                Monday – Friday: 9:00 AM – 6:00 PM<br />
                Saturday & Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-7">
          <div class="bg-slate-800/80 backdrop-blur-md p-3 rounded-xl border border-slate-700/60 shadow-xl relative overflow-hidden">
            <h2 class="text-xl font-bold text-white mb-4">Send Us a Message</h2>

            <!-- Success Notification Banner -->
            <transition name="fade">
              <div 
                v-if="isSubmitted" 
                class="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center gap-3 text-emerald-300"
              >
                <CheckCircle2 :size="24" class="flex-shrink-0" />
                <span>Thank you for reaching out! Your message has been sent successfully.</span>
              </div>
            </transition>

            <form @submit.prevent="handleSubmit" class="space-y-3">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label for="name" class="block text-sm font-medium text-slate-300 mb-1">Your Name *</label>
                  <input 
                    v-model="name"
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    required
                    class="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label for="contact-email" class="block text-sm font-medium text-slate-300 mb-1">Your Email *</label>
                  <input 
                    v-model="email"
                    type="email" 
                    id="contact-email" 
                    placeholder="john@example.com"
                    required
                    class="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-slate-300 mb-1">Subject</label>
                <input 
                  v-model="subject"
                  type="text" 
                  id="subject" 
                  placeholder="Inquiry about Course Catalog"
                  class="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-slate-300 mb-1">Message *</label>
                <textarea 
                  v-model="message"
                  id="message" 
                  rows="5"
                  placeholder="How can we help you?"
                  required
                  class="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
              >
                <Send :size="18" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
