import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getMockProfile, type UserProfile } from '../services/profileService';
import useAuthStore from '../../auth/store/useAuthStore';

/// Hook para obtener perfil
export const useProfile = (userId?: string) => {
  const { user } = useAuthStore();
  const profileId = userId || user?.id;

  return useQuery({
    queryKey: ['profile', profileId],
    queryFn: async () => {
      console.log('useProfile - queryFn ejecutándose');
      console.log('useProfile - profileId:', profileId);
      console.log('useProfile - user:', user);

      if (!profileId) {
        console.log('useProfile - No profileId, usando mock');
        return getMockProfile(); // Devolver mock aunque no haya ID
      }

      // Por ahora usar mock, después cambiar a:
      // return await getProfile(profileId);
      console.log('useProfile - Devolviendo mock profile');
      return getMockProfile();
    },
    enabled: true, // Cambiar de !!profileId a true para que siempre ejecute
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

// Hook para actualizar perfil usando PUT /api/profile/{id}
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthStore();

  return useMutation({
    mutationFn: async (data: Partial<UserProfile>) => {
      if (!user?.id) throw new Error('No user ID');

      // Cuando conectes al backend real, usar:
      // return await updateProfile(user.id, data);

      // Simulación temporal
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const currentProfile = getMockProfile();

      // Simular actualización
      return {
        ...currentProfile,
        bio: data.bio || currentProfile.bio,
        location: data.location || currentProfile.location,
        skills: data.skills || currentProfile.skills,
        socialLinks: { ...currentProfile.socialLinks, ...data.socialLinks },
        experience: data.experience || currentProfile.experience || '',
      };
    },
    onSuccess: (updatedProfile) => {
      // Actualizar cache
      queryClient.setQueryData(['profile', user?.id], updatedProfile);

      // Invalidar para refetch
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
    onError: (error) => {
      console.error('Error updating profile:', error);
    },
  });
};
