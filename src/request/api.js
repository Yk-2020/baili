import { get, post } from './http'
export const selectCarousel = data => post('/selectCarousel', data);
export const selectTestimonials = data => post('/selectTestimonials', data);
export const selectScene = data => post('/selectScene', data);
export const goodsSelect = data => post('/goodsSelect', data);
export const selectDetail = data => post('/selectDetail', data);