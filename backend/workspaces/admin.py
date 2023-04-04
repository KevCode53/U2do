from django.contrib import admin
from workspaces.models import Workspace, StyleWorkspace, Todo

# Register your models here.

@admin.register(Workspace)
class WorkspaceAdmin(admin.ModelAdmin):
  '''Admin View for Workspace'''

  list_display = ('name','created', 'created_by')
  list_filter = ('name',)
  # inlines = [
  #   Inline,
  # ]
  # raw_id_fields = ('',)
  readonly_fields = ('created_by', 'updated_by')
  # search_fields = ('',)
  # date_hierarchy = ''
  # ordering = ('',)

@admin.register(StyleWorkspace)
class StyleWorkspaceAdmin(admin.ModelAdmin):
  '''Admin View for StyleWorkspace'''

  list_display = ('bg_color', 'bg_image')
  # list_filter = ('workspace',)
  # inlines = [
  #   Inline,
  # ]
  # raw_id_fields = ('',)
  # readonly_fields = ('',)
  # search_fields = ('',)
  # date_hierarchy = ''
  # ordering = ('',)

  @admin.register(Todo)
  class TodoAdmin(admin.ModelAdmin):
    '''Admin View for Todo'''

    list_display = ('title', 'workspace', 'created')
    # list_filter = ('created',)
    # inlines = [
    #   Inline,
    # ]
    # raw_id_fields = ('',)
    readonly_fields = ('created_by', 'updated_by')
    # search_fields = ('',)
    # date_hierarchy = ''
    # ordering = ('',)