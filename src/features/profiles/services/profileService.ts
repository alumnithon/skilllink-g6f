import api from '../../../shared/lib/axios';

// Interfaces basadas en el backend real
export interface SocialLinks {
  linkedin?: string;
  github?: string;
}

export interface UserProfile {
  bio: string;
  location: string;
  ocupation: string;
  experience: string;
  skills: string[];
  interests: string[];
  socialLinks: SocialLinks;
  contactEmail: string;
  contactPhone: string;
  countryId: string;
  certifications: string[];
  name: string;
  password: string;
  imageUrl: string;
}

// Para compatibilidad con componentes existentes - EXTENDEMOS UserProfile
export interface MentorProfile extends UserProfile {
  // Campos adicionales para compatibilidad
  id: string;
  fullName: string;
  email: string;
  avatar?: string;
  rating?: number;
  reviewsCount?: number;
  achievements?: string[];
  statistics?: {
    courses?: number;
    projects?: number;
    mentorships?: number;
    students?: number;
    yearsExperience?: number;
  };
}

export interface StudentProfile extends UserProfile {
  // Campos adicionales para compatibilidad
  id: string;
  fullName: string;
  email: string;
  avatar?: string;
  rating?: number;
  reviewsCount?: number;
  achievements?: string[];
  statistics?: {
    courses?: number;
    projects?: number;
    mentorships?: number;
    students?: number;
    yearsExperience?: number;
  };
}

// ===== API CALLS =====
export async function getProfile(id: string): Promise<UserProfile> {
  try {
    const response = await api.get(`/profiles/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
}

export async function updateProfile(
  id: string,
  data: Partial<UserProfile>
): Promise<UserProfile> {
  try {
    const response = await api.put(`/profile/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
}

// ===== MOCK DATA (temporal) =====
export function getMockProfile(): MentorProfile {
  return {
    // Backend fields
    bio: 'Senior Frontend Developer con 5 años de experiencia. Especializado en React, Node.js y arquitecturas escalables. Me apasiona enseñar y ayudar a desarrolladores junior a crecer profesionalmente.',
    location: 'Ciudad de México, México',
    ocupation: 'Mentor',
    experience:
      'Senior Frontend Developer en TechCorp (2022-Presente), Frontend Developer en StartupXYZ (2020-2022)',
    skills: ['React', 'Javascript', 'HTML', 'CSS', 'Node.js', 'Git', 'Docker'],
    interests: [
      'Primer empleo en tech',
      'Transición de carrera',
      'React y ecosistema',
    ],
    socialLinks: {
      linkedin: 'linkedin/anagarcia',
      github: 'github.com/anagarcia',
    },
    contactEmail: 'anagarcia@gmail.com',
    contactPhone: '+52 55 1234 5678',
    countryId: 'MX',
    certifications: ['React Developer Certification', 'Node.js Certification'],
    name: 'Pedro Gómez',
    password: '', // No mostrar
    imageUrl: '',

    // Compatibility fields
    id: '1234567890',
    fullName: 'Pedro Gómez',
    email: 'anagarcia@gmail.com',
    avatar: '',
    rating: 4.8,
    reviewsCount: 133,
    achievements: [
      'Top Mentor 2024',
      '100+ horas de mentoría',
      '95% éxito laboral',
      '23 estudiantes mentoreados',
      'Mentor verificado',
    ],
    statistics: {
      students: 23,
      projects: 8,
      yearsExperience: 5,
    },
  };
}
